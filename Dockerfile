FROM cypress/included:15.7.0

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

CMD ["tail", "-f", "/dev/null"]
