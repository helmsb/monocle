{-# LANGUAGE NoImplicitPrelude #-}

-- | The Monocle Search Language Syntax
module Monocle.Search.Syntax (Expr (..), SortOrder (..)) where

import Relude

type Field = Text

type Value = Text

data SortOrder = Asc | Desc deriving (Show, Eq)

data Expr
  = AndExpr Expr Expr
  | OrExpr Expr Expr
  | NotExpr Expr
  | -- Field operator
    EqExpr Field Value
  | GtExpr Field Value
  | LtExpr Field Value
  | GtEqExpr Field Value
  | LtEqExpr Field Value
  | -- Search operator
    OrderByExpr Field SortOrder Expr
  | LimitExpr Int Expr
  deriving (Show, Eq)
