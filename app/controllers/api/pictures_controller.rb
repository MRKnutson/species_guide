class Api::PicturesController < ApplicationController
  before_action :set_species
  before_action :set_picture, only: [:show, :update, :destroy]

  def index
    render json: @species.pictures
  end

  def show
    render json: @picture
  end

  def create
    @picture = @species.pictures.new(picture_params)
    if (@picture.save)
      render json: @picture
    else
      render json: { errors: @picture.errors }, status: 422
    end
  end

  def update
    if (@picture.update(picture_params))
      render json: @picture
    else
      render json: { errors: @picture.errors }, status: 422
    end
  end

  def destroy
    render json: @picture.destroy
  end


  private

  def picture_params
    params.require(:picture).permit(:location)
  end

  def set_species
    @species=Species.find(params[:species_id])
  end

  def set_picture
    @picture = @species.pictures.find(params[:id])
  end
end
