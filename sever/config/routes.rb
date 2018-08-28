Rails.application.routes.draw do
  devise_for :users
  resources :messages
  resources :rooms
  mount ActionCable.server => '/cable'
  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index, :create]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :rooms
    end
  end
end
