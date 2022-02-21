FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Dark-Maxv1/alpha-v5-testing-repo /root/alpha-v5-testing-repo
WORKDIR /root/alpha-v5-testing-repo/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
