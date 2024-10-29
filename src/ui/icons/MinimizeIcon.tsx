import { SVGProps } from "react";

export default function MinimizeIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.3435 7.44249H4.65659C4.52991 7.44249 4.40843 7.50123 4.31885 7.60578C4.22928 7.71033 4.17896 7.85214 4.17896 8C4.17896 8.14786 4.22928 8.28966 4.31885 8.39421C4.40843 8.49877 4.52991 8.5575 4.65659 8.5575H11.3435C11.4702 8.5575 11.5917 8.49877 11.6812 8.39421C11.7708 8.28966 11.8211 8.14786 11.8211 8C11.8211 7.85214 11.7708 7.71033 11.6812 7.60578C11.5917 7.50123 11.4702 7.44249 11.3435 7.44249Z" />
    </svg>
  )
}