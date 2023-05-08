class ReviewsController < ApplicationController
skip_before_action :authorize, only: :index


def index
    render json: Review.all
end

    def create
        review = current_user.reviews.create(review_params)
        if review.valid?
          render json: review
        else
          render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def review_params
        params.permit(:title, :review, :user_id, :item_id)
    end
end
