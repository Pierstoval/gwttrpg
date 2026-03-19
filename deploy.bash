#!/bin/bash

pnpm eleventy
git cm -am-
git push
ssh $GWTTRPG_DEPLOY_REMOTE git -C $GWTTRPG_DEPLOY_DIR pull
