class ThisappController < ApplicationController

	def index
	end

	def stage1
		@user = User.find(session[:user_id]) if session[:user_id]
	end

	def stage2
	end

	def stage3
	end

	def menu
		@user = User.all
	end
end
