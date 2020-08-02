.PHONY: dev prod help
.DEFAULT_GOAL: help

default: help

help: ## Output available commands
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

dev:  ## Run a development environment on port 3000
	@docker-compose build
	@docker-compose up

prod: ## Run a production environment on port 8080
	@docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
	@docker-compose -f docker-compose.yml -f docker-compose.prod.yml up