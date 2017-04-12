
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/12/2017 14:07:08
-- Generated from EDMX file: C:\Development\KendoSales\Sales\DataAccess\Context\Sales.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [KendoSalesDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_Tasks_ToTask]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Tasks] DROP CONSTRAINT [FK_Tasks_ToTask];
GO
IF OBJECT_ID(N'[dbo].[FK_ListingBuildingStyle]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Listings] DROP CONSTRAINT [FK_ListingBuildingStyle];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Tasks]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Tasks];
GO
IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO
IF OBJECT_ID(N'[dbo].[Listings]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Listings];
GO
IF OBJECT_ID(N'[dbo].[BuildingStyles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[BuildingStyles];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Tasks'
CREATE TABLE [dbo].[Tasks] (
    [TaskId] int  NOT NULL,
    [Start] datetime  NOT NULL,
    [End] datetime  NOT NULL,
    [Title] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [OwnerId] int  NOT NULL,
    [IsAllDay] bit  NOT NULL,
    [RecurrenceRule] nvarchar(max)  NULL,
    [RecurrenceId] int  NULL,
    [RecurrenceException] nvarchar(max)  NULL,
    [StartTimezone] nvarchar(max)  NULL,
    [EndTimezone] nvarchar(max)  NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [UserId] int  NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [Email] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Listings'
CREATE TABLE [dbo].[Listings] (
    [ListingId] int  NOT NULL,
    [Address1] nvarchar(50)  NOT NULL,
    [Address2] nvarchar(max)  NULL,
    [City] nvarchar(max)  NULL,
    [State] nvarchar(max)  NULL,
    [Zip] nvarchar(max)  NULL,
    [County] nvarchar(max)  NULL,
    [ListingType] nvarchar(max)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [MeetupDate] datetime  NULL,
    [GoLiveDate] datetime  NULL,
    [InspectionDate] datetime  NULL,
    [ClosingDate] datetime  NULL,
    [Beds] int  NULL,
    [Baths] decimal(2,1)  NULL,
    [SquareFoot] int  NULL,
    [Style] nvarchar(max)  NULL
);
GO

-- Creating table 'BuildingStyles'
CREATE TABLE [dbo].[BuildingStyles] (
    [StyleId] int IDENTITY(1,1) NOT NULL,
    [Description] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [TaskId] in table 'Tasks'
ALTER TABLE [dbo].[Tasks]
ADD CONSTRAINT [PK_Tasks]
    PRIMARY KEY CLUSTERED ([TaskId] ASC);
GO

-- Creating primary key on [UserId] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([UserId] ASC);
GO

-- Creating primary key on [ListingId] in table 'Listings'
ALTER TABLE [dbo].[Listings]
ADD CONSTRAINT [PK_Listings]
    PRIMARY KEY CLUSTERED ([ListingId] ASC);
GO

-- Creating primary key on [StyleId] in table 'BuildingStyles'
ALTER TABLE [dbo].[BuildingStyles]
ADD CONSTRAINT [PK_BuildingStyles]
    PRIMARY KEY CLUSTERED ([StyleId] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [RecurrenceId] in table 'Tasks'
ALTER TABLE [dbo].[Tasks]
ADD CONSTRAINT [FK_Tasks_ToTask]
    FOREIGN KEY ([RecurrenceId])
    REFERENCES [dbo].[Tasks]
        ([TaskId])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Tasks_ToTask'
CREATE INDEX [IX_FK_Tasks_ToTask]
ON [dbo].[Tasks]
    ([RecurrenceId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------