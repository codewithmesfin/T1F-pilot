# Use Angular Lazy Loading Routes

Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times 

# Step-by-step setup
There are two main steps to setting up a lazy-loaded feature module:

### 1. Create the feature module with the CLI, using the --route flag.
### 2. Configure the routes.

## Setup 
Run ` ng new 'component-name' --routing ` 

## Create Feature module with route option
Run ` ng generate module 'module-name' --route 'route-name' --module 'parent-module'`

## Development server
