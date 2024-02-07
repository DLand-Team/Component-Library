import type { TreeItemProps } from "mui-eazy";
import { useMemo, useState } from "react";

export enum DealType {
  CAPITAL_RAISING = "capital_raising",
  EQUITY = "equity",
  STARTUP_PITCH = "startup_pitch",
  PARTNERSHIPS = "partnerships",
  SELL_A_BUSINESS = "sell_a_business",
}
const useTreeConfig = (): TreeItemProps => {
  const [new_draft_type] = useState(DealType.CAPITAL_RAISING);
  return useMemo(() => {
    return {
      depth: 0,
      label: "Deal Basics",
      active: true,
      isCurrent: true,
      sections: [
        {
          depth: 0,
          label: "Business Details",
          name: "businessDetails",
          active: false,
          type: "object",
          sections: [
            {
              depth: 2,
              label: "Executive Summary",
              name: "executive_summary",
              judeShow: () => {
                return ![
                  DealType.SELL_A_BUSINESS,
                  DealType.PARTNERSHIPS,
                ].includes(new_draft_type);
              },
              active: false,
            },
            {
              depth: 2,
              label: "Problem / Gap",
              name: "problem_to_be_solved",
              judeShow: () => {
                return ![
                  DealType.SELL_A_BUSINESS,
                  DealType.PARTNERSHIPS,
                ].includes(new_draft_type);
              },
              active: false,
            },
            {
              depth: 2,
              label: "Vision / Strategy",
              name: "vision",
              judeShow: () => {
                return ![
                  DealType.SELL_A_BUSINESS,
                  DealType.PARTNERSHIPS,
                ].includes(new_draft_type);
              },
              active: false,
            },
            {
              depth: 2,
              label: "Product / Service",
              name: "product",
              judeShow: () => {
                return ![
                  DealType.SELL_A_BUSINESS,
                  DealType.PARTNERSHIPS,
                ].includes(new_draft_type);
              },
              active: false,
            },
            {
              depth: 2,
              label: "Traction",
              name: "traction",
              judeShow: () => {
                return ![
                  DealType.SELL_A_BUSINESS,
                  DealType.PARTNERSHIPS,
                ].includes(new_draft_type);
              },
              active: false,
            },
            {
              depth: 2,
              label: "Business Model",
              name: "business_model",
              judeShow: () => {
                return ![
                  DealType.SELL_A_BUSINESS,
                  DealType.PARTNERSHIPS,
                ].includes(new_draft_type);
              },
              active: false,
            },
          ],
        },
        {
          depth: 0,
          label: "Market & Competition",
          name: "marketCompetition",
          active: false,
          type: "object",
          judeShow: () => {
            return ![DealType.SELL_A_BUSINESS, DealType.PARTNERSHIPS].includes(
              new_draft_type
            );
          },
          sections: [
            {
              depth: 2,
              label: "Custormers",
              name: "custormers",
              active: false,
            },
            {
              depth: 2,
              label: "Market",
              name: "market",
              active: false,
            },
            {
              depth: 2,
              label: "Competition",
              name: "competition",
              active: false,
            },
          ],
        },
        {
          depth: 0,
          label: "Media",
          name: "media",
          judeShow: () => {
            return ![DealType.SELL_A_BUSINESS, DealType.PARTNERSHIPS].includes(
              new_draft_type
            );
          },
          active: false,
        },
        {
          depth: 0,
          label: "FAQ",
          name: "faq",
          judeShow: () => {
            return ![DealType.SELL_A_BUSINESS, DealType.PARTNERSHIPS].includes(
              new_draft_type
            );
          },
          active: false,
        },
      ],
    };
  }, [new_draft_type]);
};

export default useTreeConfig;
