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
        $message_data = json_decode($msg->getBody());

        return json_encode(['isWorked' => true]);
    }
}
