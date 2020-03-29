<?php

namespace App\Controller;

use App\Entity\User;
use OldSound\RabbitMqBundle\RabbitMq\ProducerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Psr\Log\LoggerInterface;

class IndexController extends AbstractController
{
    private $passwordEncoder;
    private $producer;
    private $logger;

    public function __construct(
        ProducerInterface $producer,
        UserPasswordEncoderInterface $passwordEncoder,
        LoggerInterface $logger
    )
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->producer = $producer;
        $this->logger = $logger;
    }

    /**
     * @Route("/auth/login", name="login", methods={"POST"})
     */
    public function login()
    {
        return $this->json([
            'message' => 'Login to some!',
        ]);
    }

    /**
     * @Route("/auth/register", name="register", methods={"POST"})
     */
    public function register() {
        $request = Request::createFromGlobals();
        $userCredentials = json_decode($request->getContent());

        $entityManager = $this->getDoctrine()->getManager();

        $user = new User();
        $user->setName($userCredentials->username);
        $user->setEmail($userCredentials->email);
        $user->setPassword(
            $this->passwordEncoder->encodePassword(
                $user,
                $userCredentials->password
            )
        );

        $this->producer->publish(serialize($user));
//        $entityManager->persist($user);
//        $entityManager->flush();

        return $this->json($userCredentials);
    }
}
