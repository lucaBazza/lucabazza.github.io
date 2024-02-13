# lucabazzanella.github.io
lucabazzanella.github.io

### Hi there, I'm Luca - aka [Zabba][lucabazzanella.com] 👋

[![Website](https://raw.githubusercontent.com/lucaBazza/lucabazza.github.io/main/img/DSC09160_ps.jpg)](https://lucabazza.github.io)

## I'm a Developer!!

- 🌱 I’m currently learning everything
- 👯 I’m looking to collaborate with other developers
- 🥅 2022 Goals: Contribute more to Open Source projects + create my own guitar amp sim 
- ⚡ Fun fact: I love to compose and play guitar 

&nbsp;

&nbsp;

## Deploy

```bash
#       PRODUCTION RUN
docker run -d \
    --network frontend \
    --restart unless-stopped \ 
    --name lucabazza.github.io \
    registry.zabba.dev/lucabazza.github.io:latest
```
```bash
docker run -d --network frontend --restart unless-stopped --name lucabazza.github.io registry.zabba.dev/lucabazza.github.io:latest
```