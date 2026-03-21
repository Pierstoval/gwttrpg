#!/bin/bash

pnpm build
git add .
git cm -m-
git push
ssh $GWTTRPG_DEPLOY_REMOTE git -C $GWTTRPG_DEPLOY_DIR pull
