import { useState } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Tendencies, TendenciesProps } from "./Tendencies";
export default {
  title: "molecule/myPageView",
  component: Tendencies,
} as Meta;

const Template: Story<TendenciesProps> = (args) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  function onChange(selectedId: number) {
    setSelectedId(selectedId);
  }
  return <Tendencies {...args} selectedId={selectedId} onChange={onChange} />;
};

export const CollaboTendencies = Template.bind({});
CollaboTendencies.args = {
  isEditing: false,
  type: [
    {
      id: 1,
      name: "정열적인 빨강이",
    },
    {
      id: 2,
      name: "느긋한 초록이",
    },
    {
      id: 3,
      name: "정열적인 빨강이",
    },
    {
      id: 4,
      name: "느긋한 초록이",
    },
    {
      id: 5,
      name: "정열적인 빨강이",
    },
    {
      id: 6,
      name: "느긋한 초록이",
    },
  ],
  tag: [
    {
      id: 1,
      name: "성실함",
    },
    {
      id: 3,
      name: "꼼꼼함",
    },
  ],
  user: {
    name: "김팀블",
    type: {
      id: 1,
      name: "정열적인 빨강이",
    },
  },
  selectedId: 3,
};
