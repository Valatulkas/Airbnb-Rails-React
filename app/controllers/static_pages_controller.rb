class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def property
    @data = { property_id: params[:id] }.to_json
    render 'property'
  end

  def login
    render 'login'
  end
  
  def host
    render 'host'
  end
  
  def patron
    render 'patron'
  end

  def success
    render 'success'
  end
  
end
