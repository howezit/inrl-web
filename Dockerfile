FROM node:latest
ENV TZ=Asia/Kolkata
WORKDIR /root/inrl/
COPY package*.json ./
RUN npm install
RUN apt -y update && sudo apt install -y nodejs && sudo apt install fontconfig
COPY . .
CMD ["node", "index.js"]
