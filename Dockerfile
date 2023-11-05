FROM oven/bun

RUN bun create next-app next --ts --tailwind --eslint --app --no-src-dir --import-alias --use-bun
WORKDIR /home/bun/app/next