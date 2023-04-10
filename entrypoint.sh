#!/bin/bash

Config=$(envsubst < .env.production)
echo $Config > .env.production