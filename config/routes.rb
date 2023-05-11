Rails.application.routes.draw do
  
  resources :reviews
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # TODO : fix routes for user_items /cart
  # post "/cart", to: "user_items#cart"
  # update "/cart", to: "user_items#cart"
  post "/charges", to: "charges#create"
  get "/me", to: "users#show"


  resources :users, only: :index do
    resources :user_items
  end

  resources :users, only: :index do
    resources :reviews
  end

  # resources :user_items, only: [:index, :show, :create, :destroy, :update]
  resources :user_items, only: [:cart, :show, :index, :destroy]
  resources :users, except: [:update, :destroy]
  resources :items, only: [:index, :show]
  resources :reviews, except: [:show, :update]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
