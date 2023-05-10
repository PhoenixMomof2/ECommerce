class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    # 1:1 : may not need to render all users for an e-commerce site. Can /profile replace /me?
    def profile
        render json: @user, include: [:items]
    end

    # GET /me 
    def show
        render json: @current_user
    end

    # POST /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # Stretch - a user can destroy their account
    # def destroy
    #     user = User.find_by(:id params[id])
    # end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
