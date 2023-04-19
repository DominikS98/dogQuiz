interface Dog {
  id: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  height: height;
  weught: weight;
  image: image;
}
interface height {
  imperial: string;
  metric: string;
}
interface weight {
  imperial: string;
  metric: string;
}
interface image {
  height: string;
  url: string;
  id: string;
  width: string;
}

export default Dog;
