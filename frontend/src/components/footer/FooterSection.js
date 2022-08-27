function FooterSection(props) {
  return (
    <ul
      className={`flex flex-col justify-around gap-4 md:w-1/3 text-center + 
			${props.extraClass ? props.extraClass : ""} text-white sm:flex-none `}
    >
      {props.children}
    </ul>
  );
}

export default FooterSection;
