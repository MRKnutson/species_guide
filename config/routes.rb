Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :phylums do
      resources :groups
    end

    resources :groups do
      resources :species
    end

    resources :species do
      resources :pictures
    end

  end

end
