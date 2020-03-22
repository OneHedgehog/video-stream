<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/auth/login", name="login" methods={"GET"})
     */
    public function index()
    {
        $response = $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/IndexController.hp',
        ]);

        $response->headers->set('Access-Control-Allow-Origin', '*');

        return $response;
    }
}
