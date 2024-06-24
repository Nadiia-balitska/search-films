import css from "./Member.module.css";

const photo = "https://image.tmdb.org/t/p/w500";
const placeholderLink =
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
const getPicture = (picture) => {
  return picture ? photo + picture : placeholderLink;
};

const CastMember = ({ profile_path, name, character, department }) => {
  return (
    <div className={css.member}>
      <img src={getPicture(profile_path)} alt={name} className={css.photo} />
      <p className={css.name}>{name}</p>
      <p className={css.as}>As: {character || department || "No Info"}</p>
    </div>
  );
};

export default CastMember;
