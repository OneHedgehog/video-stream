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

  config.vm.network "forwarded_port", guest: 8000, host: 8000
   config.vm.network "forwarded_port", guest: 4200, host: 4200

   config.vm.synced_folder "./frontend", "/vagrant/frontend", type: "nfs", create: true

  config.vm.provision :docker
  config.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", rebuild: true, run: "always"
end
