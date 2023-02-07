# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/master/containers/ubuntu/.devcontainer/base.Dockerfile
# [Choice] Ubuntu version (use jammy or bionic on local arm64/Apple Silicon): jammy, focal, bionic
ARG VARIANT="jammy"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

# Change mirroring server to Japanese one
RUN sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g" /etc/apt/sources.list

# Derived from Tauri contribution and setup guides:
# See: https://github.com/tauri-apps/tauri/blob/dev/.github/CONTRIBUTING.md#development-guide
# See: https://tauri.app/v1/guides/getting-started/prerequisites/#setting-up-linux
ARG TAURI_BUILD_DEPS="build-essential curl libappindicator3-dev libgtk-3-dev librsvg2-dev libssl-dev libwebkit2gtk-4.0-dev wget"
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends $TAURI_BUILD_DEPS

ARG WORKDIR

# zsh
RUN sed -i.bak "s|$HOME:/bin/bash|$HOME:/bin/zsh|" /etc/passwd

# install zsh extension (prezto)
RUN git clone --recursive https://github.com/sorin-ionescu/prezto.git $HOME/.zprezto
RUN ln -s $HOME/.zprezto/runcoms/zlogin    $HOME/.zlogin \
  && ln -s $HOME/.zprezto/runcoms/zlogout   $HOME/.zlogout \
  && ln -s $HOME/.zprezto/runcoms/zpreztorc $HOME/.zpreztorc \
  && ln -s $HOME/.zprezto/runcoms/zprofile  $HOME/.zprofile \
  && ln -s $HOME/.zprezto/runcoms/zshenv    $HOME/.zshenv
RUN echo "zstyle ':prezto:module:prompt' theme 'powerlevel10k'" >> $HOME/.zpreztorc

# Volta
RUN curl https://get.volta.sh | bash

# Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

WORKDIR ${WORKDIR}
