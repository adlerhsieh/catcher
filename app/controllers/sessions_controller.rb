class SessionsController < ApplicationController
  def new
  end

  def create
  	user = User.authenticate(params[:name], params[:password])
  	if user
  		session[:user_id] = user.id
  		redirect_to menu_path
  	else
  		flash.now[:notice] = "Invalid name or password"
  		render 'new'
  	end
  end

  def destroy
  	session[:user_id] = nil
  	redirect_to menu_path
  end
end
