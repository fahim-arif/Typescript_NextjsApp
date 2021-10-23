import { Icon } from "@chakra-ui/react";

function CheckboxIcon(props: any) {
  const { isIndeterminate, isChecked, ...rest } = props;

  return (
    <Icon viewBox="0 0 24 24" {...rest}>
      <circle
        cx={12}
        cy={12}
        r={8}
        fill={isIndeterminate ? "#FFFFFF" : "#FC2D00"}
      />
    </Icon>
  );
}

export default CheckboxIcon;
