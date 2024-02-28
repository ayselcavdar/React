import { useEffect, useMemo, useState } from "react";

function App() {
  const genders = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female" },
  ];

  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "JavaScript" },
    { key: 3, value: "CSS" },
    { key: 4, value: "HTML" },
  ];

  const levels = [
    { key: "beginner", value: "Beginner" },
    { key: "jr_developer", value: "Jr. Developer" },
    { key: "sr_developer", value: "Sr. Developer" },
  ];

  const [name, setName] = useState("ice");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [level, setLevel] = useState("jr_developer");
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const [rules, setRules] = useState([
    { key: 1, value: "1.Accept the rule", checked: false },
    { key: 2, value: "2.Accept the rule", checked: false },
    { key: 3, value: "3.Accept the rule", checked: true },
  ]);

  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };

  const submitHandle = () => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
  };

  const selectGender = genders.find((g) => g.key === gender);
  const selectLevel = levels.find((g) => g.key === level);
  const enabled = rules.every((rule) => rule.checked) && avatar;

  return (
    <>
      <button onClick={() => setName("obi")}>Change Name</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select</option>
        {genders.map((gender) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>
      <br />

      <button onClick={() => setCategories([2, 3, 4])}>
        Select Categories
      </button>
      <select
        value={categories}
        multiple={true}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => +option.value)
          )
        }
      >
        <option value="">Select</option>
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <br />
      <pre>{JSON.stringify(categories, null, 2)}</pre>
      <br />

      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Confirm the rules
      </label>
      <br />
      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}
      <br />
      <pre>{JSON.stringify(rules, null, 2)} </pre>
      <br />
      {levels.map((l, index) => (
        <label key={index}>
          <input
            type="radio"
            value={l.key}
            checked={l.key === level}
            onChange={(e) => setLevel(e.target.value)}
          />
          {l.value}
        </label>
      ))}
      <br />
      {JSON.stringify(selectLevel)}
      <br />

      <label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>

      <br />
      {avatar && (
        <>
          (<h3>{avatar.name}</h3>){image && <img src={image} />}
        </>
      )}

      <br />
      <button onClick={submitHandle} disabled={!enabled}>
        Continue
      </button>
    </>
  );
}

export default App;
