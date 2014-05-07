class ThisappController < ApplicationController

	def index
	end

	def stage1
		@user = User.find(session[:user_id]) if session[:user_id]
	end

	def stage2
		@user = User.find(session[:user_id]) if session[:user_id]
	end

	def stage3
		@user = User.find(session[:user_id]) if session[:user_id]
	end

	def menu
		@user = User.all
	end
end
