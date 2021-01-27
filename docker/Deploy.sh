#Retrieve an authentication token and authenticate your Docker client to your registry.
aws ecr get-login-password --region ap-southeast-1 | sudo docker login --username AWS --password-stdin $1
#Delete container
sudo docker container rm -f promotion-app-$2
#Run Docker Compose
sudo AWSRepo=$1 TAG=$2 PORT=$3 docker-compose -f ${PWD}/services/promotion_service/docker-compose.yml pull
sudo AWSRepo=$1 TAG=$2 PORT=$3 docker-compose -f ${PWD}/services/promotion_service/docker-compose.yml up -d