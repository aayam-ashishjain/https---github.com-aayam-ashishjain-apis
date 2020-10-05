# Datasources

This directory contains config for datasources used by this app.

="insert into StocksToConsider values('" & A2 &"','" &B2 &"','"&C2&"','"&D2&"','"&E2&"','"&F2&"')"

Create view vwStocksToConsider as
Select min(ID) as ID, CompanyName, Industry, Symbol, Series, ISINCode, count(id) as Weight, 0 as AdjustmentFactor from
stockstoconsider
group by CompanyName, Industry, Symbol, Series, ISINCode
