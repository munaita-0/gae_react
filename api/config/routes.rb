Rails.application.routes.draw do
  root 'memos#index'
  resources :memos
  resources :users, :only => [:index, :show]
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
end
