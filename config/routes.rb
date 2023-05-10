Rails.application.routes.draw do
  
  resources :reviews
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/profile", to: "users#profile"
  post "/cart", to: "user_items#cart"
  post "/charges", to: "charges#create"


  resources :users, only: :index do
    resources :user_items
  end

  resources :users, only: :index do
    resources :reviews
  end

  # resources :user_items, only: [:index, :show, :create, :destroy, :update]
  resources :user_items, only: [:index, :show, :destroy]
  resources :users, except: [:update, :destroy]
  resources :items, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
