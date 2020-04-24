Rails.application.routes.draw do
  constraints format: :json do
   resources :users, only: [:create]
   resource :session, only: [:create, :destroy]
  end
  
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
