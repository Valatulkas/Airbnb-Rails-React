Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/property/:id' => 'static_pages#property'
  get '/login' => 'static_pages#login'
  get '/host' => 'static_pages#host'
  get '/patron' => 'static_pages#patron'

  namespace :api do
    # Properties
    resources :properties, only: [:index, :show, :create]
    put '/properties' => 'properties#edit'
    get '/properties/:user' => 'properties#index_by_user'

    #Bookings
    resources :bookings, only: [:create, :index_by_user]
    get '/properties/:id/bookings' => 'bookings#get_property_bookings'

    # Users
    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    get '/properties/:user' => 'users#index_properties'
    get '/authenticated' => 'sessions#authenticated'

    # Success
    resources :charges, only: [:create]
    post '/charges/mark_complete' => 'charges#mark_complete'

  end

end
