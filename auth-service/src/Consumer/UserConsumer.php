<?php

namespace App\Consumer;

use OldSound\RabbitMqBundle\RabbitMq\ConsumerInterface;
use PhpAmqpLib\Message\AMQPMessage;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Swift_Mailer;

class UserConsumer implements ConsumerInterface {
    private $container;
    private $logger;
    private $mailer;

    public function __construct(
        ContainerInterface $container,
        LoggerInterface $logger,
        Swift_Mailer $mailer
    )
    {
        $this->container = $container;
        $this->logger = $logger;
        $this->mailer = $mailer;
    }

    public function execute(AMQPMessage $msg)
    {
        $user = unserialize($msg->getBody());
        $message = (new \Swift_Message('Welcome with registering at'))
            ->setFrom($user->email)
            ->setTo('auth-service@somemail.com')
            ->setBody('Welcome with registering at this site...');
        $this->mailer->send($message);

        return ConsumerInterface::MSG_ACK;
    }
}
