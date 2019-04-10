Rails.application.routes.draw do
  root 'memos#index'
  resources :memos
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
end
