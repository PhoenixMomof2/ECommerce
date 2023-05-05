class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    before_action :authorized, only: [:create]

    def show
        user = User.find_by(:id params[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
    end

    def create
        user = User.new(user_params)
            if user.save
                session[:user_id] = user.id
                render json: user, status: 201
            else
                render json: { errors: user.erros.full_messages }, status: :unprocessable_entity
            end
    end

    private
    def user_params
        params.permit(:username, :password)
    end

end
