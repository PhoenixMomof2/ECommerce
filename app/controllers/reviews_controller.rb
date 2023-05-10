class ReviewsController < ApplicationController
skip_before_action :authorize, only: :index
before_action :authorize, only: :create


def index
    render json: Review.all
end


    def create
        @review = Review.create!(review_params)
        render json: @review, status: :created
    end

    # 1:1 do I need before_action destroy if I'm using the current_user.id?
     def destroy
        @review = Review.find_by(id: params[:id])
        if @review.user_id == current_user.id 
        @review.destroy
        head :no_content
        else
            render json: {message: "Cannot Delete"}
        end
    end

    private
    def review_params
        params.permit(:title, :review, :user_id, :item_id)
    end
end
