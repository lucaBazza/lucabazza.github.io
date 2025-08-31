# lucabazzanella.github.io
lucabazzanella.github.io

### Hi there, I'm Luca - aka [Zabba][lucabazzanella.com] 👋

[![Website](https://raw.githubusercontent.com/lucaBazza/lucabazza.github.io/main/img/portfolios/DSC09160_ps.jpg)](https://lucabazza.github.io)

## I'm a Developer!!

- 🌱 I’m currently learning everything
- 👯 I’m looking to collaborate with other developers
- 🥅 2024 Goals: Contribute more to Open Source projects + create my own guitar amp sim 
- ⚡ Fun fact: I love to compose and play guitar 

&nbsp;

&nbsp;

test locally
```bash
docker run -d \
    --name lucabazza.github.io \
    -p 8080:80 \
    registry.home.zabba.dev/lucabazza.github.io:latest
```

&nbsp;

## Deploy to production 2025
```bash
# build and push
docker context use default;
docker build \
    --no-cache \
    --push \
    --platform linux/amd64 \
    -t registry.public.zabba.site/lucabazza.github.io:latest .
```

```bash
# 🍊 run production on hcloud server, proxied by traefik
docker context use hcloud;
docker compose -f ~/Documents/gitlab-zabba/orangepi/template-hcloud/compose.yml up dsp -d
```

&nbsp;

## Deploy to production 2024
```bash
# build and push
docker build \
    --no-cache \
    --push \
    -t registry.home.zabba.dev/lucabazza.github.io:latest .
```

```bash
# 🍊 run production on pvt server
docker run -d \
    --name lucabazza.github.io \
    --network frontend \
    --restart unless-stopped \ 
    registry.home.zabba.dev/lucabazza.github.io:latest
```


&nbsp;

12:08