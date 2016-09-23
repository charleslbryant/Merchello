﻿namespace Merchello.Core.Persistence.Querying
{
    using Merchello.Core.Persistence.Mappers;
    using Merchello.Core.Persistence.SqlSyntax;

    /// <summary>
    /// Represents a factory responsible for translating entity queries.
    /// </summary>
    internal interface IQueryFactory : IExposeSqlSyntax
    {
        /// <summary>
        /// Gets the resolver for mapping properties between entities and DTO (POCO) classes.
        /// </summary>
        IMappingResolver MappingResolver { get; }

        /// <summary>
        /// Creates the query.
        /// </summary>
        /// <typeparam name="T">
        /// The type of entity to be queried
        /// </typeparam>
        /// <returns>
        /// The <see cref="IQuery{T}"/>.
        /// </returns>
        IQuery<T> Create<T>();
    }
}