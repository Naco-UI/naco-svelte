#!/bin/bash
DIST_DIR="./dist"

function build_kit() {
  pnpm vite build
  pnpm svelte-kit sync
  pnpm svelte-package
}

function postbuild_cleanup() {
  rm "$DIST_DIR"/*/*/*.stories.*
  rm "$DIST_DIR"/*/*/*.mdx
}

function verify_build() {
  pnpm publint
}

rm -rf "$DIST_DIR"
build_kit
postbuild_cleanup
verify_build
