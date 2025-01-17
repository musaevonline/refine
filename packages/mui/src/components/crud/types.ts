import {
    CreateButtonProps,
    DeleteButtonProps,
    EditButtonProps,
    RefreshButtonProps,
    ListButtonProps,
    SaveButtonProps,
} from "../buttons/types";

import type { BoxProps } from "@mui/material/Box";
import type { CardActionsProps } from "@mui/material/CardActions";
import type { CardContentProps } from "@mui/material/CardContent";
import type { CardHeaderProps } from "@mui/material/CardHeader";
import type { CardProps } from "@mui/material/Card";

import {
    RefineCrudCreateProps,
    RefineCrudEditProps,
    RefineCrudListProps,
    RefineCrudShowProps,
} from "@refinedev/ui-types";

export type CreateProps = RefineCrudCreateProps<
    SaveButtonProps,
    BoxProps,
    CardActionsProps,
    CardProps,
    CardHeaderProps,
    CardContentProps,
    {}
>;

export type EditProps = RefineCrudEditProps<
    SaveButtonProps,
    DeleteButtonProps,
    BoxProps,
    CardActionsProps,
    CardProps,
    CardHeaderProps,
    CardContentProps,
    {},
    RefreshButtonProps,
    ListButtonProps
>;

export type ListProps = RefineCrudListProps<
    CreateButtonProps,
    BoxProps,
    CardProps,
    CardHeaderProps,
    CardContentProps,
    {}
>;

export type ShowProps = RefineCrudShowProps<
    BoxProps,
    CardActionsProps,
    CardProps,
    CardHeaderProps,
    CardContentProps,
    {},
    EditButtonProps,
    DeleteButtonProps,
    RefreshButtonProps,
    ListButtonProps
>;

export type Type = "show" | "create" | "edit";
