class UsersController < ApplicationController

  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
  		session[:user_id] = @user.id
  		redirect_to menu_path, :notice => "success"
      @user.update_attribute(:stage1_score, 0)
  	  @user.update_attribute(:stage2_score, 0)
      @user.update_attribute(:stage3_score, 0)
    else
  		render 'new'
  	end
  end

  def update
    @user = User.find(session[:user_id])
    @user.update_attributes(user_params)
    redirect_to menu_path
  end

  def all
    @user = User.all
  end

  private
  	def user_params
  		params.require(:user).permit(:name, :password, :password_confirmation, :stage1_score, :stage2_score, :stage3_score)
  	end
end
