<?php

namespace App\Consumer;

use OldSound\RabbitMqBundle\RabbitMq\ConsumerInterface;
use PhpAmqpLib\Message\AMQPMessage;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class UserConsumer implements ConsumerInterface {
    private $container;
    private $logger;

    public function __construct(
        ContainerInterface $container,
        LoggerInterface $logger
    )
    {
        $this->container = $container;
        $this->logger = $logger;
    }

    public function execute(AMQPMessage $msg)
    {
        $this->logger->info('in consumer');
//        $swiftTransport = $this->container->get('swiftmailer.transport.real');
//
//        if (!$swiftTransport->isStarted()) {
//            $swiftTransport->start();
//        }
//
//        $message = unserialize($msg->getBody());
//        $swiftTransport->send($message);
//        $swiftTransport->stop();



        return ConsumerInterface::MSG_ACK;
    }
}
