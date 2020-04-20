Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vagrant.plugins = [
    "vagrant-docker-compose",
    "vagrant-gatling-rsync"
  ]

  config.vm.provider "virtualbox" do |v|
    v.memory = 8048
    v.cpus = 2
  end

   config.vm.network "forwarded_port", guest: 8080, host: 8080
   config.vm.network "forwarded_port", guest: 8025, host:  8025
   config.vm.network "forwarded_port", guest: 15672, host: 15672
   config.vm.network "forwarded_port", guest: 4200, host: 4200
   config.vm.network "forwarded_port", guest: 5433, host: 5433
   config.vm.network "forwarded_port", guest: 5672, host: 5672
   config.vm.network "forwarded_port", guest: 15672, host: 15672
   config.vm.network "forwarded_port", guest: 3000, host: 3000
   config.vm.network "forwarded_port", guest: 5000, host: 5000

  config.vm.synced_folder "./frontend", "/vagrant/frontend", type: "nfs", create: true
  config.vm.synced_folder "./main-service", "/vagrant/main-service", type: "nfs", create: true

  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: ["/vagrant/main-service/docker-compose.yml"], rebuild: true, run: "always"
  config.vm.provision :docker_compose, yml: ["/vagrant/auth-service/docker-compose.yml"], rebuild: true, run: "always"
  config.vm.provision :docker_compose, yml: ["/vagrant/frontend/docker-compose.yml"], rebuild: true, run: "always"
end
