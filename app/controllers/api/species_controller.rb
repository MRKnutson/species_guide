class Api::SpeciesController < ApplicationController
  before_action :set_group
  before_action :set_species, only: [:show, :update, :destroy]

  def index
    render json: @group.species
  end

  def show
    render json: @species
  end

  def create
    @species = @group.species.new(species_params)
    if (@species.save)
      render json: @species
    else
      render json: { errors: @species.errors }, status: 422
    end
  end

  def update
    if (@species.update(species_params))
      render json: @species
    else
      render json: { errors: @species.errors }, status: 422
    end
  end

  def destroy
    render json: @species.destroy
  end


  private

  def species_params
    params.require(:species).permit(:common_name, :scientific_name, :rcode, :image, :description, :characteristics, :similar_species)
  end

  def set_group
    @group=Group.find(params[:group_id])
  end

  def set_species
    @species = @group.species.find(params[:id])
  end
end
