.PHONY: dev dev-down help
.DEFAULT_GOAL: help

default: help

help: ## Output available commands
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

dev:  ## Run a development environment on port 3000
	@docker-compose --env-file .env.local -f docker-compose.yml -f docker-compose.dev.yml build
	@docker-compose --env-file .env.local -f docker-compose.yml -f docker-compose.dev.yml up

dev-down:
	@docker-compose --env-file .env.local down
